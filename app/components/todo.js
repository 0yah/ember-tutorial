import Component from '@glimmer/component';

export default class TodoComponent extends Component {
    @service('todo-data') todos;
}
