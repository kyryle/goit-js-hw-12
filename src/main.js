import { getImagesByQuery } from './js/pixabay-api';
import {createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton,} from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form.form')
const ulGallery = document.querySelector('ul.gallery')
const liSize = document.querySelector('li.li')
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
            const gallery = createGallery(data.hits, true)
            const PER_PAGE = 15
            let pageCheck = PER_PAGE * page
            if (data.totalHits <= PER_PAGE || data.totalHits < Math.ceil(pageCheck)) {
        hideLoadMoreButton()
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
            return
        } finally {
            hideLoader()
        }
    }
})

loadMoreBtn.addEventListener('click', async e => {
    try {
        showLoader()
        hideLoadMoreButton()
        e.preventDefault();
        page += 1
        const res = await getImagesByQuery(inputText, page)
        const data = res
        const gallery = createGallery(data.hits, false)
        const scrollLength = liSize.getBoundingClientRect()

        window.scrollBy({
        top: scrollLength.height * 2,
        behavior: "smooth"
        })
        const PER_PAGE = 15
        let pageCheck = PER_PAGE * page
        if (data.totalHits <= PER_PAGE || data.totalHits < Math.ceil(pageCheck)) {
        iziToast.show({
            message: "We're sorry, but you've reached the end of search results."
        })
        hideLoadMoreButton()
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
    } finally {
        hideLoader()
    }
})
