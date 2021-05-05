import { makeStyles } from '@naturacosmeticos/natds-web';

const useStyles = makeStyles(() => ({
  card: {
    margin: 'auto',
    marginTop: '20px',
    width: '220px',
    height: 'auto',
    position: 'relative',
    padding: '30px',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '0 !important',
  },
  button: {
    width: '100%',
  },
  tag: {
    borderRadius: '0',
    position: 'absolute',
    top: 10,
    left: 0,
  },
  image: {
    width: '218px',
    height: '218px',
  },
  details: {
    margin: '.5625rem 0',
    lineHeight: '1.875rem',
  },
  price: {
    fontSize: '24px',
    color: '#f93',
  },
}));

export default useStyles;
