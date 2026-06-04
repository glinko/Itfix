#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="/home/alex/projects/itfix"
IMAGE_NAME="itfix"
CONTAINER_NAME="itfix-web"
HOST_PORT="3010"
CONTAINER_PORT="3000"

echo "=== Deploying ITfix to rndocker ==="

# Navigate to project directory
cd "$PROJECT_DIR"

# Pull latest code from git
echo "[1/5] Pulling latest code..."
git fetch origin main
git reset --hard origin/main

# Rebuild Docker image
echo "[2/5] Building Docker image..."
docker build -t "${IMAGE_NAME}:latest" .

# Stop and remove existing container
echo "[3/5] Stopping existing container..."
docker stop "$CONTAINER_NAME" 2>/dev/null || true
docker rm "$CONTAINER_NAME" 2>/dev/null || true

# Start new container
echo "[4/5] Starting new container..."
docker run -d \
  --name "$CONTAINER_NAME" \
  --restart unless-stopped \
  -p "${HOST_PORT}:${CONTAINER_PORT}" \
  "${IMAGE_NAME}:latest"

# Verify container is running
sleep 3
if docker ps --filter "name=$CONTAINER_NAME" --filter "status=running" --format '{{.Names}}' | grep -q "$CONTAINER_NAME"; then
  echo "[4/5] Container is running successfully."
else
  echo "[4/5] ERROR: Container failed to start!" >&2
  docker logs "$CONTAINER_NAME" >&2
  exit 1
fi

# Clean up unused images
echo "[5/5] Pruning unused Docker images..."
docker image prune -f

echo "=== Deployment complete ==="
