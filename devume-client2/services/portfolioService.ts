import { apiClient } from './api';

// 포트폴리오 데이터 타입 정의
export interface Portfolio {
  id: number | string;
  title: string;
  owner: string;
  description?: string;
  tags: string[];
  image?: string;
  profileImage?: string;
  createdAt: string;
  updatedAt: string;
}

// 포트폴리오 서비스 클래스
export class PortfolioService {
  // 포트폴리오 목록 조회
  async getPortfolios(page: number = 1, limit: number = 10): Promise<Portfolio[]> {
    try {
      const response = await apiClient.get<Portfolio[]>(`portfolios?page=${page}&limit=${limit}`);
      
      if (!response.success || !response.data) {
        console.error('Failed to fetch portfolios:', response.error);
        return [];
      }
      
      return response.data;
    } catch (error) {
      console.error('Portfolio service error:', error);
      return [];
    }
  }
  
  // 포트폴리오 상세 조회
  async getPortfolioById(id: number | string): Promise<Portfolio | null> {
    try {
      const response = await apiClient.get<Portfolio>(`portfolios/${id}`);
      
      if (!response.success || !response.data) {
        console.error(`Failed to fetch portfolio with id ${id}:`, response.error);
        return null;
      }
      
      return response.data;
    } catch (error) {
      console.error('Portfolio service error:', error);
      return null;
    }
  }
  
  // 새 포트폴리오 생성
  async createPortfolio(portfolioData: Omit<Portfolio, 'id' | 'createdAt' | 'updatedAt'>): Promise<Portfolio | null> {
    try {
      const response = await apiClient.post<Portfolio>('portfolios', portfolioData);
      
      if (!response.success || !response.data) {
        console.error('Failed to create portfolio:', response.error);
        return null;
      }
      
      return response.data;
    } catch (error) {
      console.error('Portfolio service error:', error);
      return null;
    }
  }
  
  // 포트폴리오 업데이트
  async updatePortfolio(id: number | string, portfolioData: Partial<Portfolio>): Promise<Portfolio | null> {
    try {
      const response = await apiClient.put<Portfolio>(`portfolios/${id}`, portfolioData);
      
      if (!response.success || !response.data) {
        console.error(`Failed to update portfolio with id ${id}:`, response.error);
        return null;
      }
      
      return response.data;
    } catch (error) {
      console.error('Portfolio service error:', error);
      return null;
    }
  }
  
  // 포트폴리오 삭제
  async deletePortfolio(id: number | string): Promise<boolean> {
    try {
      const response = await apiClient.delete(`portfolios/${id}`);
      
      if (!response.success) {
        console.error(`Failed to delete portfolio with id ${id}:`, response.error);
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Portfolio service error:', error);
      return false;
    }
  }
}

// 싱글턴 인스턴스 생성
export const portfolioService = new PortfolioService();
