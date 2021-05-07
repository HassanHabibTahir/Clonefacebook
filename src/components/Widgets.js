import React from 'react'
import './css/widgets.css'
const Widgets = () => {
  return (
    <div className="widgets">

      <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLearnWithTeachField%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="500" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>


      {/* 
      <div class="fb-page"
        data-href="https://www.facebook.com/LearnWithTeachField/"
        data-tabs="timeline" data-width="" data-height=""
        data-small-header="false" data-adapt-container-width="true"
        data-hide-cover="false" data-show-facepile="true">
        <blockquote cite="https://www.facebook.com/LearnWithTeachField/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/LearnWithTeachField/">Teach Field</a></blockquote></div> */}
    </div>
  )
}

export default Widgets
