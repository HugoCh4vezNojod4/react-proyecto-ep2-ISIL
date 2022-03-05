import "./Blog.css";
import React from 'react';

function Blog(props) {
    return (
        <section className="border-top">
            <div className="container">
                <div className="row">
                    <div className="padd col-sm-4">
                        <h4>Blog</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna aliquam, tincidunt eros at, volutpat nibh.</p>
                    </div>
                    <div className="padd col-sm-8">
                        <h2>El inicio de una nueva era</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus elementum mi iaculis lobortis. Praesent eros neque, ornare nec tristique nec, vestibulum id massa. Mauris tortor lorem, sagittis sit amet lorem quis, ullamcorper porta tortor. Cras ligula sem, viverra ac elit in, gravida interdum nisl. Donec tristique molestie pretium. Nulla vel cursus arcu. Curabitur ultricies dui fringilla, cursus risus ac, luctus nunc. Mauris laoreet arcu eget lectus auctor tristique. Vivamus lacus neque, euismod at iaculis vitae, dapibus quis erat. Nam cursus bibendum hendrerit. Sed quis dolor volutpat, maximus leo vitae, tristique est. Vestibulum ac tempus nisi. Aenean massa ipsum, lobortis vel pellentesque viverra, finibus ac tortor. Etiam pretium sem id egestas consectetur. Donec feugiat nulla eu est imperdiet, a scelerisque massa fermentum.</p>
                        <br/>
                        <p>Fusce elementum, nisl ut iaculis volutpat, nulla sem consequat eros, mattis maximus diam tortor quis dui. Aliquam hendrerit lorem velit, eget porta nibh mollis a. Donec at ligula vitae mauris luctus efficitur id id mauris. Quisque imperdiet hendrerit tortor sit amet cursus. Ut maximus, ante quis placerat malesuada, justo ligula iaculis massa, non lobortis nulla metus non lectus. Donec vel tortor at erat vulputate tristique. Maecenas quis mauris dui. Morbi mauris.</p>
                        <br/>
                        <h5>Ya lo sabíamos, pero...</h5>
                        <p>Maecenas in libero consectetur, interdum massa non, maximus lectus. Ut non sodales massa. Vivamus sed tortor id augue dictum luctus fringilla sed lacus. Fusce iaculis, diam eget aliquam placerat, erat purus suscipit arcu, sed rhoncus ex lectus sit amet leo. Curabitur sed enim eu justo blandit maximus. Pellentesque fermentum rhoncus quam non pellentesque. Integer id bibendum leo. Morbi viverra placerat lectus, ac imperdiet risus rutrum ut. In bibendum imperdiet libero ut ullamcorper. Etiam eros purus, ornare luctus faucibus nec, tristique quis nisl.</p>
                        <br/>
                        <p>Ut eget leo blandit, tempor arcu sit amet, pellentesque nisl. Aliquam viverra tincidunt erat vel pretium. Vivamus molestie lacus nibh, sit amet malesuada lorem molestie sagittis. Suspendisse ultricies semper mauris, sollicitudin volutpat mi rutrum vel. Duis nisl elit, rhoncus nec malesuada non, egestas ut nulla. Mauris tincidunt facilisis aliquam. Donec massa lectus, elementum id dignissim vitae, vulputate at risus. Mauris posuere hendrerit mi ut tincidunt.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;