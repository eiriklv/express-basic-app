exports = module.exports = function (templates, api) {
    $('#main').empty().append(templates.common.spinner());

    api.resource.get({ hello: 'test' }, function (err, resources) {
        var data = {
            type: 'success',
            title: 'Some kind of title',
            content: 'Some kind of content',
            result: JSON.stringify(resources)
        };

        $('#main').empty().append(templates.common.panel(data));
        console.log(resources);
    });
};