const isYoutubeUrl = url => {
  const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/)
  return match && match[2].length === 11
}

const isVimeoUrl = url => /(http:\/\/|https:\/\/|)(player.|www.)?(vimeo\.com)\/(video\/)?([A-Za-z0-9._%-]*)(\&\S+)?/.test(url)

export default { isYoutubeUrl, isVimeoUrl }
