import { Enum } from "@app-core/types/enum.type";

/**
 * Checks if a key is property of enum
 * @param enumSrc
 * @param key
 */
export function isEnumKey<T extends Enum>(enumSrc: T, key: unknown) : key is keyof T {
  return Number.isInteger(enumSrc[key as keyof T]) || typeof enumSrc[key as keyof T] === 'string';
}

/**
 * Checks if enum has a given value
 * @param enumSrc
 * @param value
 */
export function isEnumValue<T extends Enum>(enumSrc: T, value: unknown): value is T[keyof T] {
  return Number.isInteger(enumSrc[enumSrc[value as keyof T] as any as keyof T]);
}

export function isValueInStringEnum<E extends string>(strEnum: Record<string, E>, value: string): value is E  {
  const enumValues = Object.values(strEnum) as string[];
  return enumValues.includes(value);
}

/**
 * Transform enum to list of keys
 * @param enumSrc
 */
export function enumToKeys<T extends Enum>(enumSrc: T): (keyof T)[] {
  return Object.keys(enumSrc)
    .filter((key: keyof T | any) => isEnumKey(enumSrc, key)) as (keyof T)[];
}

/**
 * Transforms enum to list of values
 * @param enumSrc
 */
export function enumToValues<T extends Enum>(enumSrc: T): T[keyof T][] {
  return enumToKeys(enumSrc).map((key: keyof T) => enumSrc[key]);
}

/**
 * Transforms enum value to its appropriate key
 * @param enumSrc
 * @param value
 */
export function enumValueToKey<T extends Enum>(enumSrc: T, value: T[keyof T]): keyof T | undefined {
  return (enumSrc as any)[value];
}

/**
 * Transforms enum to entries
 * @param enumSrc
 */
export function enumToEntries<T extends Enum>(enumSrc: T): [keyof T, T[keyof T]][] {
  return enumToValues(enumSrc)
    .map((value: T[keyof T]) =>
      [enumValueToKey(enumSrc, value) as keyof T, value]);
}




