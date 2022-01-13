module.exports = {
    user: {
        logIn: require("./user/logIn"),
    },
    activity: {
        addNote: require("./activity/addNote"),
        getNotes: require("./activity/getNotes"),
        deleteNote: require("./activity/deleteNote"),
        createActivity: require("./activity/createActivity"),
        getActivities: require("./activity/getActivities"),
        deleteActivity: require("./activity/deleteActivity"),
        addWarning: require("./activity/addWarning"),
        getWarnings: require("./activity/getWarnings"),
        deleteWarning: require("./activity/deleteWarning"),
    },
    administration: {
        createBrand: require("./administration/createBrand"),
        getBrands: require("./administration/getBrands"),
        deleteBrand: require("./administration/deleteBrand"),
        getIndications: require("./administration/getIndications"),
        createIndication: require("./administration/createIndication"),
        deleteIndication: require("./administration/deleteIndication"),
    },
    knowledgeRepository: {
        getAnswerById: require("./knowledge-repository/getAnswerById"),
        getAnswers: require("./knowledge-repository/getAnswers"),
        getDocuments: require("./knowledge-repository/getDocuments"),
    },
    shared: {
        downloadFile: require("./shared/download-file")
    }
}