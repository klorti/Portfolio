// Converts PostgreSQL datetime string to Temporal datetime
export function toTemporalDateTime(dateTime: string) {
    return Temporal.PlainDateTime.from(
        dateTime.replace(" ", "T")
    );
}
