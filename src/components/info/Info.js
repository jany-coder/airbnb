import React, { useState } from 'react';
import './_info.scss';
import { Grid } from '@material-ui/core';

const Info = () => {

    const [under, setUnder] = useState({one: 'under', two: '', three: '', four: '', five: '', six: ''})

    return (
        <div id='info-filter'>
            <div className='i-container'>
                <h1 className='head-title'>Inspiration for future getaways</h1>
                <div className='filter-city'>
                    <span onClick={() => setUnder({one: 'under', two: '', three: '', four: '', five: '', six: ''})}>
                        <p className={under.one}>Destention for art & culture</p>
                    </span>
                    <span onClick={() => setUnder({one: '', two: 'under', three: '', four: '', five: '', six: ''})}>
                        <p className={under.two}>Destention for outdoor</p>
                    </span>
                    <span onClick={() => setUnder({one: '', two: '', three: 'under', four: '', five: '', six: ''})}>
                        <p className={under.three}>Mountain calbins</p>
                    </span>
                    <span onClick={() => setUnder({one: '', two: '', three: '', four: 'under', five: '', six: ''})}>
                        <p className={under.four}>Beach destination</p>
                    </span>
                    <span onClick={() => setUnder({one: '', two: '', three: '', four: '', five: 'under', six: ''})}>
                        <p className={under.five}>Popular destination</p>
                    </span>
                    <span onClick={() => setUnder({one: '', two: '', three: '', four: '', five: '', six: 'under'})}>
                        <p className={under.six}>Unique stays</p>
                    </span>
                </div>
                <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="Bottom popover">
  Popover on bottom
</button>
                <div className='cities'>
                    <Grid container>
                    <Grid item md='3' sm='6' xs='6'>
                        <div className='column'>
                            <div className='text-wrap'>
                                <h4>Phenox</h4>
                                <p>arizona</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>London</h4>
                                <p>england</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Barcelona</h4>
                                <p>catalonia</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>San-fransisco</h4>
                                <p>california</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>York</h4>
                                <p>england</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Los-angesi</h4>
                                <p>California</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Rome</h4>
                                <p>italy</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>New York</h4>
                                <p>New York</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Valencia</h4>
                                <p>Spain</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md='3' sm='6' xs='6'>
                    <div className='column'>
                            <div className='text-wrap'>
                                <h4>Phenox</h4>
                                <p>arizona</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>London</h4>
                                <p>england</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Barcelona</h4>
                                <p>catalonia</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>San-fransisco</h4>
                                <p>california</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>York</h4>
                                <p>england</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Los-angesi</h4>
                                <p>California</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Rome</h4>
                                <p>italy</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>New York</h4>
                                <p>New York</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Valencia</h4>
                                <p>Spain</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md='3' sm='6' xs='6'>
                    <div className='column'>
                            <div className='text-wrap'>
                                <h4>Phenox</h4>
                                <p>arizona</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>London</h4>
                                <p>england</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Barcelona</h4>
                                <p>catalonia</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>San-fransisco</h4>
                                <p>california</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>York</h4>
                                <p>england</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Los-angesi</h4>
                                <p>California</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Rome</h4>
                                <p>italy</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>New York</h4>
                                <p>New York</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Valencia</h4>
                                <p>Spain</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md='3' sm='6' xs='6'>
                    <div className='column'>
                            <div className='text-wrap'>
                                <h4>Phenox</h4>
                                <p>arizona</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>London</h4>
                                <p>england</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Barcelona</h4>
                                <p>catalonia</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>San-fransisco</h4>
                                <p>california</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>York</h4>
                                <p>england</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Los-angesi</h4>
                                <p>California</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Rome</h4>
                                <p>italy</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>New York</h4>
                                <p>New York</p>
                            </div>
                            <div className='text-wrap'>
                                <h4>Valencia</h4>
                                <p>Spain</p>
                            </div>
                        </div>
                    </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default Info;
