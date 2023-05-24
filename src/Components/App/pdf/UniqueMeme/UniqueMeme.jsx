import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Document, Page, View, Text } from '@react-pdf/renderer'


function UniqueMeme(props) {

    const meme = useSelector(s => s.current)
    const img = useSelector(s => s.listes.images.find(i => i.id === meme.id))

    return (
        <Document title={ 'meme' + meme.title } author='ICS' creator='ICS' language='FR-fr'>
            <Page orientation='landscape' size='A4'>
                <View debug='true' >
                    <Text color='darkGrey'>{ meme.title }</Text>
                </View>
            </Page>
        </Document>
    )
}

UniqueMeme.propTypes = {
    id: PropTypes.number.isRequired
}

export default UniqueMeme

