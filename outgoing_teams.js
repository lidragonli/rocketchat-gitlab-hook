class Script {
    prepare_outgoing_request({ request }) {
        console.log(request.data);
        return {
            url: request.url,
            method: 'POST',
            headers: {"ContentType":"application/json","Content-type":"application/json"},
            data: {
                context: 'http://schema.org/extensions',
                type: 'MessageCard',
                themeColor: "0076D7",
                summary: 'Larry Bryant created a new task',
                text: request.data.user_name.bold() + ": " + request.data.text,
                sections: [{
                    "activityTitle": "Larry Bryant created a new task",
                    "activitySubtitle": "On Project Tango",
                    "activityImage": "https://teamsnodesample.azurewebsites.net/static/img/image5.png",
                    "facts": [{
                        "name": "Assigned to",
                        "value": "Unassigned"
                    }, {
                        "name": "Due date",
                        "value": "Mon May 01 2017 17:07:18 GMT-0700 (Pacific Daylight Time)"
                    }, {
                        "name": "Status",
                        "value": "Not started"
                    }],
                    "markdown": true
                }],
                //text: encodeURIComponent( request.data.user_name.bold() + request.data.text)
            },
        };
    }
}