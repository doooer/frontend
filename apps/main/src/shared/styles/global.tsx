import { css, Global } from '@emotion/react';
import React from 'react';

export const GlobalStyles = React.memo(() => {
  return (
    <Global
      styles={css`
        html,
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        }

        html,
        body,
        div,
        span,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        a,
        img,
        b,
        u,
        i,
        ol,
        ul,
        li,
        form,
        label,
        table,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        footer,
        header,
        menu,
        nav,
        section,
        summary,
        video {
          margin: 0;
          padding: 0;
          border: 0;
        }

        article,
        aside,
        footer,
        header,
        nav,
        section {
          display: block;
        }

        body {
          line-height: 1;
        }

        table,
        thead,
        tbody,
        tr,
        td,
        th {
          border-collapse: collapse;
          border-spacing: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
          cursor: pointer;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
  );
});
