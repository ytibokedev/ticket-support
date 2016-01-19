// Format The Date Using Moment.js
Template.registerHelper('formatDate', function (date) {
    return moment(date).format('MMM Do YYYY, h:mm a');
});

// Capitalize First Letter
Template.registerHelper('capFirst', function (text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
});