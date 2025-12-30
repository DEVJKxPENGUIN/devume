import styles from './page.module.css';
import {TitleRequest, TitleResponse} from "@/proto/generated/Title_pb";
import {
  PortfolioContent,
  PortfolioRequest,
  PortfolioResponse
} from "@/proto/generated/Portfolio_pb";
import {getBlogClient, getPortfolioClient, getTitleClient, grpcRequest} from "@/utils/grpcHandler";
import {Metadata} from "@grpc/grpc-js";
import PortfolioCard from "@/components/home/PortfolioCard";
import {BlogContent, BlogListRequest, BlogListResponse} from "@/proto/generated/Blog_pb";
import BlogCard from "@/components/home/BlogCard";
import HeroContent from "@/components/home/HeroContent";

export default async function HomePage() {

  const title = await fetchTitle()
  const portfolios = await fetchPortfolios(6)
  const blogs = await fetchBlogs(10)

  return (
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <HeroContent title={title}/>
        </section>

        <section className={styles.commonSection}>
          {/*<section className={styles.heroSection}>*/}
          <div className={styles.subSection}>
            <h2 className={styles.sectionTitle}>Resumes</h2>
          </div>
          <div className={styles.contentSection}>
            {portfolios.map((portfolio, index) => (
                <PortfolioCard
                    key={index}
                    title={portfolio.getTitle()}
                    description={portfolio.getDescription()}
                    nickname={portfolio.getAuthor()}
                    image={portfolio.getThumbnail()}
                    thumbs={portfolio.getThumbs()}
                    views={portfolio.getViews()}
                />
            ))}
          </div>
        </section>

        <section className={styles.commonSection}>
          <div className={styles.contentSectionRow}>
            {/* Blog content will go here */}
            {blogs.map((blog, index) => (
                <BlogCard
                    key={index}
                    title={blog.getTitle()}
                    summary={blog.getSummary()}
                    nickname={blog.getAuthor()}
                    image={blog.getThumbnail()}
                    thumbs={blog.getThumbs()}
                    views={blog.getViews()}
                />
            ))}
          </div>
          <div className={styles.subSectionReverse}>
            <h2 className={styles.sectionTitle}>Devlogs</h2>
          </div>
        </section>
      </main>
  );
}

async function fetchTitle(): Promise<string> {
  try {
    const request = new TitleRequest()
    const meta = new Metadata()
    const response: TitleResponse = await grpcRequest(getTitleClient(), 'getTitle', meta, request)
    return response.getTitle()
  } catch (error) {
    console.error('Failed to fetch title:', error)
    return "Showcase Your Work" // Fallback title
  }
}

async function fetchPortfolios(count: number): Promise<PortfolioContent[]> {
  try {
    const request = new PortfolioRequest()
    request.setCount(count)
    const meta = new Metadata()
    const response: PortfolioResponse = await grpcRequest(getPortfolioClient(), 'getPortfolios', meta, request)
    return response.getPortfoliosList()
  } catch (error) {
    console.error('Failed to fetch portfolios:', error)
    return []; // Fallback to an empty array
  }
}

async function fetchBlogs(count: number): Promise<BlogContent[]> {
  try {
    const request = new BlogListRequest()
    request.setCount(count)
    const meta = new Metadata()
    const response: BlogListResponse = await grpcRequest(getBlogClient(), 'getBlogs', meta, request)
    return response.getBlogsList()
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return []; // Fallback to an empty array
  }
}
