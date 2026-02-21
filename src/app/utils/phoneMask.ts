export function formatRussianPhone(value: string): string {
    const digits = value.replace(/\D/g, "");

    if (!digits) {
        return "";
    }

    let localNumber = digits;
    if (digits[0] === "7" || digits[0] === "8") {
        localNumber = digits.slice(1);
    }

    localNumber = localNumber.slice(0, 10);

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
