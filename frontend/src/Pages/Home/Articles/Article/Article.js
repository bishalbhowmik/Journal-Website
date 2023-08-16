import React from 'react';

const Article = () => {
    return (
        <div className='my-5'>
            <div>
                <div>
                    <div>
                        <div class="flex flex-wrap gap-2 justify-between items-center">
                            <span class="artType">Original article</span>
                        </div>
                        <a class="transition-colors duration-500" href="/jabet/178-1685297439-no-evidence-of-relationship-between-colorectal-cancer-susceptibility-and-ercc2-gene-polymorphisms">
                            <h3>No evidence of relationship between colorectal cancer susceptibility and ERCC2 gene polymorphisms</h3>
                        </a>

                        <div class="flex flex-wrap gap-x-2">
                            <div class="flex">
                                <div class="authors flex">
                                    <span class="mr-1">Rand</span>
                                    <span>Farhad</span>,
                                </div>
                            </div>
                            <div class="flex">
                                <div class="authors flex">
                                    <span class="mr-1">Eman Saadi</span>
                                    <span>Saleh</span>,
                                </div>
                            </div>
                            <div class="flex">
                                <div class="authors flex">
                                    <span class="mr-1">Ahmed Zuhair</span>
                                    <span>Alsammarraie</span>
                                </div>
                            </div>
                        </div>

                        <div class="artInfo">
                            <span>J Adv Biotechnol Exp Ther. 2023; 6(3): 638-647 </span>
                            <span>|</span>
                            <a class="hover:text-orange-700 hover:underline transition-colors duration-500" href="https://doi.org/10.5455/jabet.2023.d155">Doi: 10.5455/jabet.2023.d155</a>
                        </div>

                        <div class="artAccess">
                        <span><a href=""></a></span>
                        <span><a href=""></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;