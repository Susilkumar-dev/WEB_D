// frontend/src/services/noteService.jsx
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Request interceptor for adding auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('devroadmap-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('devroadmap-token');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Note Services
export const noteService = {
  // Get all notes for a category
  getNotesByCategory: async (category) => {
    try {
      const response = await api.get(`/notes/category/${category}`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching notes:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch notes',
      };
    }
  },

  // Get single note by slug
  getNoteBySlug: async (slug) => {
    try {
      const response = await api.get(`/notes/${slug}`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching note:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch note',
      };
    }
  },

  // Get note by ID
  getNoteById: async (id) => {
    try {
      const response = await api.get(`/notes/id/${id}`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching note:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch note',
      };
    }
  },

  // Create new note (admin only)
  createNote: async (noteData) => {
    try {
      const response = await api.post('/notes', noteData);
      return {
        success: true,
        data: response.data.data || response.data,
        message: 'Note created successfully',
      };
    } catch (error) {
      console.error('Error creating note:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to create note',
      };
    }
  },

  // Update note (admin only)
  updateNote: async (id, noteData) => {
    try {
      const response = await api.put(`/notes/${id}`, noteData);
      return {
        success: true,
        data: response.data.data || response.data,
        message: 'Note updated successfully',
      };
    } catch (error) {
      console.error('Error updating note:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to update note',
      };
    }
  },

  // Delete note (admin only)
  deleteNote: async (id) => {
    try {
      const response = await api.delete(`/notes/${id}`);
      return {
        success: true,
        message: 'Note deleted successfully',
      };
    } catch (error) {
      console.error('Error deleting note:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to delete note',
      };
    }
  },

  // Search notes
  searchNotes: async (query, category = null) => {
    try {
      const params = { q: query };
      if (category) params.category = category;
      
      const response = await api.get('/notes/search', { params });
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error searching notes:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to search notes',
      };
    }
  },

  // Get popular notes
  getPopularNotes: async (limit = 10) => {
    try {
      const response = await api.get(`/notes/popular?limit=${limit}`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching popular notes:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch popular notes',
      };
    }
  },

  // Get related notes
  getRelatedNotes: async (noteId, limit = 5) => {
    try {
      const response = await api.get(`/notes/${noteId}/related?limit=${limit}`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching related notes:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch related notes',
      };
    }
  },

  // Increment note views
  incrementViews: async (noteId) => {
    try {
      const response = await api.post(`/notes/${noteId}/view`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error incrementing views:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to increment views',
      };
    }
  },

  // Rate note
  rateNote: async (noteId, rating) => {
    try {
      const response = await api.post(`/notes/${noteId}/rate`, { rating });
      return {
        success: true,
        data: response.data.data || response.data,
        message: 'Rating submitted successfully',
      };
    } catch (error) {
      console.error('Error rating note:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to submit rating',
      };
    }
  },

  // Bookmark note
  bookmarkNote: async (noteId) => {
    try {
      const response = await api.post(`/notes/${noteId}/bookmark`);
      return {
        success: true,
        data: response.data.data || response.data,
        message: 'Note bookmarked successfully',
      };
    } catch (error) {
      console.error('Error bookmarking note:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to bookmark note',
      };
    }
  },

  // Get bookmarked notes
  getBookmarkedNotes: async () => {
    try {
      const response = await api.get('/notes/bookmarked');
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching bookmarked notes:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch bookmarks',
      };
    }
  },

  // Get note statistics
  getNoteStats: async () => {
    try {
      const response = await api.get('/notes/stats');
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching note stats:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch stats',
      };
    }
  },

  // Get learning path
  getLearningPath: async (category) => {
    try {
      const response = await api.get(`/notes/learning-path/${category}`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching learning path:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch learning path',
      };
    }
  },

  // Export notes
  exportNotes: async (category = null) => {
    try {
      const params = category ? { category } : {};
      const response = await api.get('/notes/export', {
        params,
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `devroadmap-notes-${category || 'all'}.json`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      return {
        success: true,
        message: 'Notes exported successfully',
      };
    } catch (error) {
      console.error('Error exporting notes:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to export notes',
      };
    }
  },

  // Import notes (admin only)
  importNotes: async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const response = await api.post('/notes/import', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      return {
        success: true,
        data: response.data.data || response.data,
        message: 'Notes imported successfully',
      };
    } catch (error) {
      console.error('Error importing notes:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to import notes',
      };
    }
  }
};

// Category Services
export const categoryService = {
  // Get all categories
  getCategories: async () => {
    try {
      const response = await api.get('/categories');
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching categories:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch categories',
      };
    }
  },

  // Get category details
  getCategoryDetails: async (category) => {
    try {
      const response = await api.get(`/categories/${category}`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching category:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch category',
      };
    }
  },

  // Get category statistics
  getCategoryStats: async (category) => {
    try {
      const response = await api.get(`/categories/${category}/stats`);
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching category stats:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch category stats',
      };
    }
  }
};

// Progress Services
export const progressService = {
  // Sync progress with server
  syncProgress: async (progressData) => {
    try {
      const response = await api.post('/progress/sync', progressData);
      return {
        success: true,
        data: response.data.data || response.data,
        message: 'Progress synced successfully',
      };
    } catch (error) {
      console.error('Error syncing progress:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to sync progress',
      };
    }
  },

  // Get server progress
  getServerProgress: async () => {
    try {
      const response = await api.get('/progress');
      return {
        success: true,
        data: response.data.data || response.data,
      };
    } catch (error) {
      console.error('Error fetching progress:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to fetch progress',
      };
    }
  },

  // Clear server progress
  clearServerProgress: async () => {
    try {
      const response = await api.delete('/progress');
      return {
        success: true,
        message: 'Progress cleared successfully',
      };
    } catch (error) {
      console.error('Error clearing progress:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to clear progress',
      };
    }
  },

  // Export progress
  exportProgress: async () => {
    try {
      const response = await api.get('/progress/export', {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'devroadmap-progress.json');
      document.body.appendChild(link);
      link.click();
      link.remove();
      
      return {
        success: true,
        message: 'Progress exported successfully',
      };
    } catch (error) {
      console.error('Error exporting progress:', error);
      return {
        success: false,
        error: error.response?.data?.error || 'Failed to export progress',
      };
    }
  }
};