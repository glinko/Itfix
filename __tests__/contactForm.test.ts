import { describe, it, expect } from 'vitest';

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateForm(name: string, email: string, message: string) {
  const errors: string[] = [];
  if (!name.trim()) errors.push('Name is required');
  if (!validateEmail(email)) errors.push('Valid email is required');
  if (!message.trim()) errors.push('Message is required');
  return errors;
}

describe('Contact Form Validation', () => {
  it('should return no errors for valid input', () => {
    const errors = validateForm('John', 'john@example.com', 'Need help');
    expect(errors).toHaveLength(0);
  });

  it('should reject empty name', () => {
    const errors = validateForm('', 'john@example.com', 'Need help');
    expect(errors).toContain('Name is required');
  });

  it('should reject invalid email', () => {
    const errors = validateForm('John', 'not-an-email', 'Need help');
    expect(errors).toContain('Valid email is required');
  });

  it('should reject empty message', () => {
    const errors = validateForm('John', 'john@example.com', '');
    expect(errors).toContain('Message is required');
  });

  it('should reject all empty fields', () => {
    const errors = validateForm('', '', '');
    expect(errors).toHaveLength(3);
  });
});
