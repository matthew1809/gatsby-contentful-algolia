import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Hits,
  SearchBox,
  RefinementList,
} from 'react-instantsearch-dom'
import PropTypes from 'prop-types'
import styles from './searchComp.module.css'
import hit from './hit'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

export default function() {
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="Posts">
        <header className="section-headline">
          <SearchBox
            className="ais-SearchBox-form"
            autoFocus
            translations={{
              placeholder: 'Search here...',
            }}
          />
          <RefinementList
            attribute="tags"
            className="ais-RefinementList-list"
          />
        </header>

        <div className={styles.container}>
          <div className={styles.search_panel}>
            <div className="ais-Hits-list">
              <Hits hitComponent={hit} />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  )
}

function Hit(props) {
  return (
    <div>
      <h2>{props.hit.title}</h2>
    </div>
  )
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
}
