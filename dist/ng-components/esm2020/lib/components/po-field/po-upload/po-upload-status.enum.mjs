// Enum de status de envio dos arquivos.
export var PoUploadStatus;
(function (PoUploadStatus) {
    // Enviou com sucesso.
    PoUploadStatus[PoUploadStatus["Uploaded"] = 0] = "Uploaded";
    // Está enviando.
    PoUploadStatus[PoUploadStatus["Uploading"] = 1] = "Uploading";
    // Ocorreu algum erro no envio.
    PoUploadStatus[PoUploadStatus["Error"] = 2] = "Error";
    // Não enviou ou aconteceu algum erro.
    PoUploadStatus[PoUploadStatus["None"] = 3] = "None";
})(PoUploadStatus || (PoUploadStatus = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG8tdXBsb2FkLXN0YXR1cy5lbnVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWkvc3JjL2xpYi9jb21wb25lbnRzL3BvLWZpZWxkL3BvLXVwbG9hZC9wby11cGxvYWQtc3RhdHVzLmVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0NBQXdDO0FBQ3hDLE1BQU0sQ0FBTixJQUFZLGNBU1g7QUFURCxXQUFZLGNBQWM7SUFDeEIsc0JBQXNCO0lBQ3RCLDJEQUFRLENBQUE7SUFDUixpQkFBaUI7SUFDakIsNkRBQVMsQ0FBQTtJQUNULCtCQUErQjtJQUMvQixxREFBSyxDQUFBO0lBQ0wsc0NBQXNDO0lBQ3RDLG1EQUFJLENBQUE7QUFDTixDQUFDLEVBVFcsY0FBYyxLQUFkLGNBQWMsUUFTekIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFbnVtIGRlIHN0YXR1cyBkZSBlbnZpbyBkb3MgYXJxdWl2b3MuXHJcbmV4cG9ydCBlbnVtIFBvVXBsb2FkU3RhdHVzIHtcclxuICAvLyBFbnZpb3UgY29tIHN1Y2Vzc28uXHJcbiAgVXBsb2FkZWQsXHJcbiAgLy8gRXN0w6EgZW52aWFuZG8uXHJcbiAgVXBsb2FkaW5nLFxyXG4gIC8vIE9jb3JyZXUgYWxndW0gZXJybyBubyBlbnZpby5cclxuICBFcnJvcixcclxuICAvLyBOw6NvIGVudmlvdSBvdSBhY29udGVjZXUgYWxndW0gZXJyby5cclxuICBOb25lXHJcbn1cclxuIl19