declare module 'text-trans' {
    export function capitalize(str: string): string;
    export function reverse(str: string): string;
    export function truncate(str: string, length: number): string;
    export function toCamelCase(str: string): string;
    export function toPascalCase(str: string): string;
    export function toKebabCase(str: string): string;
    export function toSnakeCase(str: string): string;
    export function toTitleCase(str: string): string;
    export function wordCount(str: string): number;
    export function isPalindrome(str: string): boolean;
  }
  
