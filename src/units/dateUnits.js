export const calculateDaysLeft = (endDateString ) => {
    const end = new Date(endDateString)
    const today = new Date()

    end.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)

    const msInDay = 24 * 60 * 60 * 1000
    return Math.ceil((end - today) / msInDay)
}

export const getDeadlineText = (daysLeft) => {
    if (daysLeft <= 0) return "Deadline passen"
    if (daysLeft <= 7) return `${daysLeft} day${daysLeft === 1 ? "" : "s"} left`
    const weeks = Math.floor(daysLeft / 7)
    return `${weeks} week${weeks === 1 ? "" : "s"} left`
}

 export const getDaysLeftStatusClass = (daysLeft) => {
     if (daysLeft <= 3) return "days-critical"
     if (daysLeft <= 7) return "days-warning"
     return "days-ok"
}
