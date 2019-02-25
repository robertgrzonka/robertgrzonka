import React from 'react'
import Helmet from 'react-helmet'
import styles from './Layout.module.scss'

const Layout = ({ children, title, description }) => (
  <div className={styles.layout}>
    <Helmet>
      <html lang='en' />
      <title>{title}</title>
      <meta name='description' content={description} charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Helmet>
    {children}
  </div>
)

export default Layout
