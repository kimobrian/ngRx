import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
  createDb() {
    const articleDetails = [
    {id: '1', title: 'Core Java Tutorial', category: 'Java'},
    {id: '2', title: 'Angular Tutorial', category: 'Angular'},
    {id: '3', title: 'Hibernate Tutorial', category: 'Hibernate'}
    ];
    // Access API with /api/articles
    return { articles: articleDetails };
  }
}
