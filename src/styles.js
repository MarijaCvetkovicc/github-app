import { makeStyles, fade } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4, 0, 6)
    },
    cardGrid: {
        padding: '20px 20px'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '65%',
    },
    cardMediaList: {
        paddingTop: '100%',
    },
    cardContent: {
        flexGrow: 1
    },
    icon: {
        marginRight: theme.spacing(2),
        maxWidth: 50,
        maxHeight: 50,
    },
    appbar: {
        alignItems: 'center',
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    link: {
        textDecoration: 'none'
    }
}));
export default useStyles;