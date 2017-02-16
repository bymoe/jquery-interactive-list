/*global console, alert, confirm, prompt*/
$(document).ready(function() {
    (function() {
    var people = {
        init: function () {
            this.domElements();
            this.eventH();
        },
        domElements: function () {
            this.$el = $('#people');
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('ul');
            this.$input.focus();
        },
        eventH: function () {
            this.$button.on('click', this.addPerson.bind(this));
            this.$el.on('click', 'i', this.removePerson);
            this.$el.on('click', 'li, p', this.editPerson);
            this.$el.on('blur', 'li', this.exitEditPerson.bind(this));
            this.$input.on('keyup', this.enterKey.bind(this));
        },
        addPerson: function () {

            if (this.$input.val() !== '' && this.$input.val().trim() !== '') { // check if the input is empty


                this.li = '<li><p>' + this.$input.val() + '</p><i class="x"><span>&#10005;</span></i></li>'; //
                this.$li = $(this.li);
                this.$li.appendTo(this.$ul);

                this.$input.val('');
                this.$input.focus();
            } else {
                this.$input.val('');
                this.$input.focus();
                return;
            }
            console.log('addPerson');
        },
        removePerson: function (e) {
            var el = e.target.closest('li'),
                $el = $(el);
                $el.remove();

        },
        editPerson: function(e) {
            console.log('editPerson');
            var el = e.target,
                $el = $(el);
            if($el.prop("tagName") === 'P') {
                $el.attr('contentEditable', 'true');
                $el.focus();
                $el.parent().css('background', '#E6AF2E');
            } else {
                var p = $el.find('p');
                p.attr('contentEditable', 'true');
                $el.find('p').focus();
                $el.css('background', '#E6AF2E');
            }

        },
        exitEditPerson: function() {
            console.log('exitEditPerson');
            var $el = this.$el.find('li'),
                $p = $el.find('p');
            $el.css('background', '#fff');
            $p.attr('contentEditable', 'false');
        },
        enterKey: function (e) {
            if (e.keyCode == 13) {
                this.$button.click();
            }
        }
    };
    people.init();
    })();
});
