module.exports = {
    date: function (datestring, format) {
        format = format || {d:0,m:1,y:2};
        var dateArr = datestring.split(/[\/\.-]/);
        return {
            day: dateArr[format.d],
            month: dateArr[format.m] - 1,
            year: dateArr[format.y]
        };
    },

    time: function (timestring) {
        var timeArr = timestring.split(/[:"']/);
        return {
            hour: timeArr[0],
            minutes: timeArr[1] || 0,
            seconds: timeArr[2] || 0,
            milliseconds: timeArr[3] || 0
        };
    },

    toDate: function (date, time) {
        return new Date(date.year, date.month, date.day,
                        time.hour || 0, time.minutes || 0,
                        time.seconds || 0, time.milliseconds || 0);
    }
};