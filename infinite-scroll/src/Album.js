import React from 'react'
import Photo from './Photo'

class Album extends React.Component {
    render() {
        let items = this.props.photos.slice(0, this.props.size),
        disp = items.map(item => {
            return <Photo url={item.url} />
        })
        return(
            <div className="album">
                {disp}
            </div>
        )
    }
   
}

export default Album