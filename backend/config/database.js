const files = [
    { id: 1, name: "Resume.docx", folderId: null },
    { id: 2, name: "Budget.docx", folderId: 5 },
    { id: 3, name: "Notes.docx", folderId: null }
];

export const getAllFiles = () => {
    return files;
}