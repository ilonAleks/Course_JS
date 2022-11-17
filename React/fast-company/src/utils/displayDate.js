export function displayDate(data) {
    const date = new Date(parseInt(data));
    const dateNow = new Date();
    const yearDiff = dateNow.getFullYear() - date.getFullYear();
    if (yearDiff === 0) {
        const dayDiff = dateNow.getDate() - date.getDate();
        if (dayDiff === 0) {
            const hourDiff = dateNow.getHours() - date.getHours();
            if (hourDiff === 0) {
                const minDiff = dateNow.getMinutes() - date.getMinutes();

                if (minDiff >= 0 && minDiff < 5) return "1 minute ago";
                if (minDiff >= 5 && minDiff < 10) return "5 minutes ago";
                if (minDiff >= 10 && minDiff < 30) return "10 minutes ago";
                return "30 minutes ago";
            }
            return `${date.getHours()}:${date.getMinutes()}`;
        }
        return `${date.getDay()} ${date.toLocaleString("default", {
            month: "long"
        })}`;
    }
    return (
        date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear()
    );
}
