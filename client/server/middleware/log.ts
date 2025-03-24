export default defineEventHandler((event) => {
  console.log('REQUEST:', getRequestURL(event).pathname)
})