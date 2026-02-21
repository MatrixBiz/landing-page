function getLocalPhoneDigits(value: string): string {
    const digits = value.replace(/\D/g, "");

    if (!digits) {
        return "";
    }

    let localNumber = digits;
    if (digits[0] === "7" || digits[0] === "8") {
        localNumber = digits.slice(1);
    }

    return localNumber.slice(0, 10);
}

function formatLocalPhone(localNumber: string): string {
    let result = "+7";
    if (localNumber.length > 0) {
        result += ` (${localNumber.slice(0, 3)}`;
    }
    if (localNumber.length >= 3) {
        result += ")";
    }
    if (localNumber.length > 3) {
        result += ` ${localNumber.slice(3, 6)}`;
    }
    if (localNumber.length > 6) {
        result += `-${localNumber.slice(6, 8)}`;
    }
    if (localNumber.length > 8) {
        result += `-${localNumber.slice(8, 10)}`;
    }

    return result;
}

export function formatRussianPhone(value: string): string {
    const digits = value.replace(/\D/g, "");
    if (!digits) {
        return "";
    }

    const localNumber = getLocalPhoneDigits(value);
    if (!localNumber && (digits[0] === "7" || digits[0] === "8")) {
        return "+7";
    }
    if (!localNumber) {
        return "";
    }

    return formatLocalPhone(localNumber);
}

export function handleRussianPhoneMaskedBackspace(
    value: string,
    cursorPosition: number,
): { value: string; cursorPosition: number } | null {
    if (cursorPosition <= 0 || /\d/.test(value[cursorPosition - 1])) {
        return null;
    }

    const localNumber = getLocalPhoneDigits(value);
    if (!localNumber) {
        return null;
    }

    const formatted = formatLocalPhone(localNumber);
    const localDigitPositions: number[] = [];
    for (let index = 0; index < formatted.length; index += 1) {
        if (/\d/.test(formatted[index]) && index !== 1) {
            localDigitPositions.push(index);
        }
    }

    let removeIndex = -1;
    for (let index = localDigitPositions.length - 1; index >= 0; index -= 1) {
        if (localDigitPositions[index] < cursorPosition) {
            removeIndex = index;
            break;
        }
    }

    if (removeIndex === -1) {
        return null;
    }

    const newLocalNumber =
        localNumber.slice(0, removeIndex) + localNumber.slice(removeIndex + 1);
    const newValue = newLocalNumber ? formatLocalPhone(newLocalNumber) : "";

    let newCursorPosition = Math.min(cursorPosition - 1, newValue.length);
    while (
        newCursorPosition > 0 &&
        !/\d/.test(newValue[newCursorPosition - 1])
    ) {
        newCursorPosition -= 1;
    }

    return { value: newValue, cursorPosition: newCursorPosition };
}
