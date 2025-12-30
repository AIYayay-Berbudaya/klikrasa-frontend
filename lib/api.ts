import { Jajanan, JajananDetailResponse, JajananListResponse } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://klikrasa-backend.vercel.app/v1/api';

export async function getAllJajanan(): Promise<Jajanan[]> {
    try {
        const response = await fetch(`${API_URL}/jajanan`, {
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error('Gagal mengambil data jajanan');
        }

        const result: JajananListResponse = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'Terjadi kesalahan');
        }

        return result.data;
    } catch (error) {
        console.error('Error fetching jajanan:', error);
        throw error;
    }
}

export async function getJajananById(id: string): Promise<Jajanan> {
    try {
        const response = await fetch(`${API_URL}/jajanan/${id}`, {
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error('Gagal mengambil detail jajanan');
        }

        const result: JajananDetailResponse = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'Terjadi kesalahan');
        }

        return result.data;
    } catch (error) {
        console.error('Error fetching jajanan detail:', error);
        throw error;
    }
}

export async function getJajananByRegion(region: string): Promise<Jajanan[]> {
    try {
        const response = await fetch(`${API_URL}/jajanan?daerah=${encodeURIComponent(region)}`, {
            next: { revalidate: 3600 },
        });

        if (!response.ok) {
            throw new Error('Gagal mengambil data jajanan');
        }

        const result: JajananListResponse = await response.json();

        if (!result.success) {
            throw new Error(result.message || 'Terjadi kesalahan');
        }

        return result.data;
    } catch (error) {
        console.error('Error fetching jajanan by region:', error);
        throw error;
    }
}

export function searchJajanan(jajananList: Jajanan[], query: string): Jajanan[] {
    const lowercaseQuery = query.toLowerCase();
    return jajananList.filter(
        (jajanan) =>
            jajanan.nama_kue.toLowerCase().includes(lowercaseQuery) ||
            jajanan.deskripsi.toLowerCase().includes(lowercaseQuery) ||
            jajanan.daerah_kue.toLowerCase().includes(lowercaseQuery)
    );
}
