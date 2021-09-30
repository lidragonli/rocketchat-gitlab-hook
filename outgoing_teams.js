const STATUSES_COLORS = {
    succeeded: '#2faa60',
    pending: '#e75e40',
    failed: '#d22852',
    canceled: '#5c5c5c',
    created: '#ffc107',
    running: '#607d8b',
};

class Script {
    prepare_outgoing_request({ request }) {
        //console.log(request.data);
        let stringArray= request.data.text.split(/(§+)/).filter( function(e) { return e.trim().length > 1; } );
        return {
            url: request.url,
            method: 'POST',
            headers: {"ContentType":"application/json","Content-type":"application/json"},
            data: {
                context: 'http://schema.org/extensions',
                type: 'MessageCard',
                themeColor: STATUSES_COLORS[stringArray[1]],
                text: request.data.text
            },
        };
    }
}

//["Deploy", "to", "[devops]", "by", "Li", "Ding", "succeeded", "at", "2021-09-29", "19:24:22", "+0000.", "Job:#1161968.", "Commit:", "Update", "devops.yaml"]