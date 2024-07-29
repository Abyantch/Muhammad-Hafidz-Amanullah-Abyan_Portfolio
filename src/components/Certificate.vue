<template>
    <section id="Certificate">
        <div class="text-center mt-[10rem]">
            <h2 class="text-3xl font-normal tracking-tight text-gray-900 dark:text-slate-600 sm:text-2xl">
                Certificate
            </h2>
            <h1 class="text-3xl font-bold tracking-tight text-sky-500 sm:text-3xl">
                Recently
            </h1>
            <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <transition-group name="certificate" tag="div" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
                    <div v-for="(certificate, index) in certificates" :key="index" class="rounded overflow-hidden shadow-lg flex flex-col hover:scale-110 transition duration-500">
                     
                        <div class="px-6 py-4 mb-auto">
                            <a :href="certificate.link" class="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">{{ certificate.title }}</a>
                            <p class="text-gray-500 text-sm">{{ certificate.description }}</p>
                        </div>
                        <div class="px-6 py-3 flex flex-row items-center justify-center bg-gray-100 dark:bg-slate-900">
                            <span class="py-1 text-xs font-regular text-gray-900 dark:text-slate-200 mr-1 flex flex-row items-center">
                                <i class='bx bx-calendar'></i>
                                <span class="ml-1">{{ certificate.time }}</span>
                            </span>
                           
                        </div>
                    </div>
                </transition-group>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            allCertificates: [
                {
                    image: 'https://ik.imagekit.io/ymfeid1q7/PNG/compressed/TOPEL%20UNNES_Muhammad%20Hafidz%20AA.png?updatedAt=1718350929568',
                    link: '#',
                    title: 'TOPEL UNNES',
                    description: 'English certification provided by P2B UNNES.',
                    time: '9 Agustus 2022',
                },
                {
                    image: 'https://ik.imagekit.io/ymfeid1q7/PNG/compressed/A4%20-%20Sertifikat%20Fungsionaris%20BEM%20FMIPA%20UNNES%202023%20(2).jpg?updatedAt=1718350928489',
                    link: '#',
                    title: 'Vice Governor BEM FMIPA UNNES 2023',
                    description: 'Became the vice governor of BEM FMIPA UNNES for the 2023-2024 term.',
                    time: '15 Januari 2023',
                },
                {
                    image: 'https://ik.imagekit.io/ymfeid1q7/PNG/compressed/SNIK%202023_Muhammad%20Hafidz%20Amanullah%20Abyan.png?updatedAt=1718350928012',
                    link: '#',
                    title: 'Presenter At SNIK 2024',
                    description: 'became one of the speakers at the SNIK 2023 event by presenting the machine learning project.',
                    time: '11 Oktober 2023',
                },
                {
                    image: 'https://ik.imagekit.io/ymfeid1q7/PNG/compressed/178_Muhammad%20Hafidz%20Amanullah%20Abyan_AMLI.png?updatedAt=1718350927314',
                    link: '#',
                    title: '2rd place Scientific Paper National Competition DIMAS TI AMLI 2022',
                    description: 'My Scientific Paper team won the national level with the Mepet Deadline project.',
                    time: '1 Juni 2022',
                    comments: 9
                },
                {
                    image: 'https://ik.imagekit.io/ymfeid1q7/PNG/compressed/Gamelab_Bootstrap%20&%20SASS.png?updatedAt=1718350927008',
                    link: '#',
                    title: 'Bootstrap and SASS (Gamelab Indonesia)',
                    description: 'Completed one of the materials at the bootcamp at gamelab indonesia on the topic of Bootsrap and SAS.',
                    time: '10 Juni 2024',
                    comments: 9
                },
                {
                    image: 'https://ik.imagekit.io/ymfeid1q7/PNG/compressed/Gamelab_Bootstrap%20&%20SASS.png?updatedAt=1718350927008',
                    link: '#',
                    title: 'Vue JS (Gamelab Indonesia)',
                    description: 'Completed one of the materials at the bootcamp at gamelab indonesia on the topic of Vue JS.',
                    time: '10 Juni 2024',
                    comments: 9
                },
                {
                    image: 'https://ik.imagekit.io/ymfeid1q7/PNG/compressed/Gamelab_Bootstrap%20&%20SASS.png?updatedAt=1718350927008',
                    link: '#',
                    title: 'React JS (Gamelab Indonesia)',
                    description: 'Completed one of the materials at the bootcamp at gamelab indonesia on the topic of React JS.',
                    time: '10 Juni 2024',
                    comments: 9
                },
                {
                    image: 'https://ik.imagekit.io/ymfeid1q7/PNG/compressed/PH_Hafidz%20A.A.png?updatedAt=1718350927913',
                    link: '#',
                    title: 'FMI FMIPA UNNES',
                    description: 'Responsible for being the vice chairman of the Islamic spiritual organization at the faculty level in FMIPA.',
                    time: '11 November 2021',
                    comments: 9
                },
            ],
            certificates: []
        }
    },
    mounted() {
        this.showCertificatesOneByOne();
    },
    methods: {
        showCertificatesOneByOne() {
            let index = 0;
            const interval = setInterval(() => {
                if (index < this.allCertificates.length) {
                    this.certificates.push(this.allCertificates[index]);
                    index++;
                } else {
                    clearInterval(interval);
                }
            }, 500); 
        }
    }
}
</script>


<style scoped>
.certificate-enter-active, .certificate-leave-active {
  transition: all 1s;
}
.certificate-enter, .certificate-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
