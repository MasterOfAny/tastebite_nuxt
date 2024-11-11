export const formatDate = (date: string) => {
    const inputDate = new Date(date);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - inputDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const sentence: Record<number, string> = {
        0: 'Today',
        1: 'Yesterday',
        2: '2 days ago',
        3: '3 days ago',
        4: '4 days ago'
    }

    if (diffDays <= 4) {
        return sentence[diffDays];
    }

    return inputDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}