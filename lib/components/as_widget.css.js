export default {
    container: {
        position: 'relative',
        userSelect: 'none'
    },
    toolbox: {
        listStyle: 'none',
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 998
    },
    toolboxItem: {
        cursor: 'pointer',
        float: 'left'
    },
    settingsCollapsed: {
        border: 0,
        maxHeight: 0,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute'
    },
    settingsExpanded: {
        maxHeight: '500px',
        overflow: 'hidden',
        padding: '5px',
        position: 'absolute',
        zIndex: 999
    }
};
