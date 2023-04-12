import { css } from '@emotion/react';

export default css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    margin: 'auto',
    marginTop: '10px',
    padding: '20px',
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    border: '1px solid green',

    TextField: {
        width: '100%',
        border: '1px solid green',
    },

    Button: {
        marginTop: '20px',
        border: '1px solid green',
    },

    div: {
        border: '1px solid green',
    }
});
