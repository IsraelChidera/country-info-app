import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Filter = () => {
  return (
        <section className="homepageFlex">
            <div className="homepageFlexForm">
                <form>
                    <label>
                        < AiOutlineSearch />
                    </label>
                    <input 
                        type="text"
                        placeholder="Search for any country . . ."
                    />
                </form>
            </div>

            <div className="homepageFlexForm">
                <form>
                    <select>
                        <option value="Filter by region">
                            Filter by region
                        </option>

                        <option value="Africa">
                            Africa
                        </option>

                        <option value="America">
                            America
                        </option>

                        <option value="Asia">
                            Asia
                        </option>

                        <option value="Europe">
                            Europe
                        </option>

                        <option value="Oceania">
                            Oceania
                        </option>
                    </select>
                </form>
            </div>
        </section>
   )
}

export default Filter