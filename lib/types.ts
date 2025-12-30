// Type definitions untuk API response
export interface Jajanan {
    _id: string;
    nama_kue: string;
    deskripsi: string;
    sejarah_kue: string[];
    cara_pembuatan: string;
    daerah_kue: string;
    gambar: string;
    link_sumber: string;
    link_peta_administrasi: string;
}

export interface ApiResponse<T> {
    success: boolean;
    message: string;
    data: T;
}

export type JajananListResponse = ApiResponse<Jajanan[]>;
export type JajananDetailResponse = ApiResponse<Jajanan>;
