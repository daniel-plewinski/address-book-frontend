import {Addresses} from '../model/Addresses';
import { Observable } from 'rxjs';

export const mockAddresses: Addresses = {
    data: {
        current_page: 1,
        data: [
            {
                id: 1,
                surname: 'Luettgen',
                phone: '327-454-5147 x29492',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 2,
                surname: 'Murphy',
                phone: '+19427803908',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 3,
                surname: 'Murray',
                phone: '(610) 397-3477',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 4,
                surname: 'Mosciski',
                phone: '928-216-2154 x283',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 5,
                surname: 'Rippin',
                phone: '(571) 504-4248 x791',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 6,
                surname: 'Mayer',
                phone: '208-354-8554',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 7,
                surname: 'Kuhn',
                phone: '1-685-730-0483 x61497',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 8,
                surname: 'Wiza',
                phone: '353.635.3642 x868',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 9,
                surname: 'Ledner',
                phone: '(992) 983-9361',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 10,
                surname: 'Walker',
                phone: '(436) 572-7654',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 11,
                surname: 'Osinski',
                phone: '1-374-201-0791 x725',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 12,
                surname: 'Lakin',
                phone: '319-720-2519 x3399',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 13,
                surname: 'Stoltenberg',
                phone: '1-319-565-6654 x590',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 14,
                surname: 'Hahn',
                phone: '873-367-1404',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            },
            {
                id: 15,
                surname: 'Kovacek',
                phone: '925-506-1274 x589',
                created_at: '2019-08-02 10:07:26',
                updated_at: '2019-08-02 10:07:26'
            }
        ],
        first_page_url: 'http://192.168.99.100:8000/api/addresses?page=1',
        from: 1,
        last_page: 7,
        last_page_url: 'http://192.168.99.100:8000/api/addresses?page=7',
        next_page_url: 'http://192.168.99.100:8000/api/addresses?page=2',
        path: 'http://192.168.99.100:8000/api/addresses',
        per_page: 15,
        prev_page_url: null,
        to: 15,
        total: 100
    }
};
