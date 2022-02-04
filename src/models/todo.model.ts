export interface ITodoItem {
    userId: number, //todo заменить на authorId
    id: number,
    title: string,
    completed: boolean, //todo убрать
    label?: string,
    bodyText?: string,
    colorBackground?: string, //todo сделать енам с типами цветов
    authorId?: string, //todo в будущем сделать поле обязательным
    coAuthorsId?: string, // айди пользователя, кто так же может редактировать заметку
    // images // в будущем сделать возможность добавлять изображения
    type?: string, //todo сделать енам с типами
    isPinned?: boolean,
    isArchived?: boolean,
    timeCreate?: Date,
    timeLastEdite?: Date,
}