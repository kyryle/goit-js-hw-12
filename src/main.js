import { getImagesByQuery } from './js/pixabay-api';
import {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton, loadMore} from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form.form')
const loadMoreBtn = document.querySelector('button.load-more')

let inputText
let page

form.addEventListener('submit', async e => {
    hideLoadMoreButton()
    e.preventDefault();
    page = 1
    const data = new FormData(form)
    inputText = data.get('search-text')
    if (inputText.trim() === "") {
        iziToast.show({
            title: 'hey',
            message: 'fill in empty field'
        });
    } else {
        clearGallery()
        showLoader()
        try {
        const res = await getImagesByQuery(inputText, page)
            const data = res
            
            if (res.hits.length === 0) {
            iziToast.show({
                message: "Sorry, there are no images matching your search query. Please try again!"
            })
                return
        }
            const gallery = createGallery(data.hits)
            showLoadMoreButton()
        } catch (err) {
            console.log(err);
            iziToast.error({
                title: 'error',
                message: "an error accured while trying to get images"
            })
            return
        } finally {
            hideLoader()
        }
    }
})

loadMoreBtn.addEventListener('click', async e => {
    try {
        hideLoadMoreButton()
        e.preventDefault();
        page += 1
        const res = await getImagesByQuery(inputText, page)
        const data = res
        const gallery = loadMore(data.hits)
        let pageCheck = 15 * page
        if (data.totalHits <= 15 || data.totalHits < Math.ceil(pageCheck)) {
        iziToast.show({
            message: "We're sorry, but you've reached the end of search results."
        })
    } else {
            showLoadMoreButton()
        }
    } catch (err) {
        console.log(err);
        
        iziToast.error({
            title: 'error',
            message: "an error accured while trying to get images"
        })
        hideLoadMoreButton()
    }
})