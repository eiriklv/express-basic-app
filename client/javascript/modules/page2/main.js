exports = module.exports = function (templates, api) {
    $('#main').empty().append(templates.common.spinner());

    api.resource.get(null, function (err, resources) {
        var data = {
            type: 'primary',
            title: 'Some other kind of title',
            content: 'Some other kind of content',
            result: JSON.stringify(resources)
        };

        $('#main').empty().append(templates.common.panel(data));
        console.log(resources);
    });
};