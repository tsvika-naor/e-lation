module.exports = {
    date: function (datestring) {
        var dateArr = datestring.split("/");
        return {
            day: dateArr[0],
            month: dateArr[1] - 1,
            year: dateArr[2]
        };
    },

    time: function (timestring) {
        var timeArr = timestring.split(/[:"']+/);
        return {
            hour: timeArr[0],
            minutes: timeArr[1] || 0,
            seconds: timeArr[2] || 0,
            milliseconds: timeArr[3] || 0
        };
    },

    toDate: function (date, time) {
        return new Date(date.year, date.month, date.day,
                        time.hour, time.minutes,
                        time.seconds, time.milliseconds);
    }
};