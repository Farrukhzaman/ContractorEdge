import React from 'react'

interface DataFetcherProps {
  block: {
    url: string // Update the type as needed
  }
  url: string | null // Update the type as needed
}

const DataFetcher = props => {
  return (
    <div className="px-5 md:pb-24 pb-20 md:pt-40 pt-15">
      <div className="container fetched-data">
        <div className="grid gap-5">
          <div dangerouslySetInnerHTML={{ __html: props.fetchedContent.props.data.html }}></div>
        </div>
      </div>
    </div>
  )
}
export default DataFetcher
