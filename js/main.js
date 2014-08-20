Beraka = {};

Beraka.Song = Backbone.Model.extend({});
Beraka.Songs = Backbone.Collection.extend({
    model: Backbone.Song
});
Beraka.SongView = Backbone.View.extend({
    events: {
        'click .action.icon-add': 'add'
    },
    tagName: 'li',
    className: "item border-bottom",
    template: Handlebars.compile($("#song-template").html()),

    initialize: function() {
        this.listenTo(this.model, "change", this.render, this);
    },


    render: function() {
        var html = this.template(this.model.toJSON());
        this.$el.html(html);
    },

    add: function(e) {
        alert(this.model.get("name"));
    }
    
});

window.Beraka = Beraka;