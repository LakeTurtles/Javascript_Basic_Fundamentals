const video = {
    title: 'a',
    tags: ['a','Ludacris','c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
}

video.showTags();