import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

import { Form, Input } from './styles'
import styles from './search.module.css'

export default connectSearchBox(({ refine, ...rest }) => (
  <Form>
    <Input
      type="text"
      placeholder="Search"
      aria-label="Search"
      onChange={e => refine(e.target.value)}
      className={styles.input}
      {...rest}
    />
    {/* <SearchIcon /> */}
  </Form>
))
